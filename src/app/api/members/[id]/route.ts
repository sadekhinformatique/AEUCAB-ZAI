import { NextRequest } from "next/server"
import { db } from "@/lib/db"
import { ok, err, audit, serialize } from "@/lib/sgiau/api"

export const dynamic = "force-dynamic"

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const member = await db.member.findUnique({
    where: { id },
    include: {
      user: { select: { id: true, username: true, role: true, isActive: true } },
      adhesion: true,
      card: true,
      payments: { include: { cotisationType: true }, orderBy: { paymentDate: "desc" }, take: 50 },
      receipts: { orderBy: { createdAt: "desc" }, take: 30 },
      _count: { select: { payments: true, presences: true, activities: true, meetings: true, votes: true } },
    },
  })
  if (!member) return err("Membre introuvable", 404)
  return ok(serialize(member))
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await req.json()
  const before = await db.member.findUnique({ where: { id } })
  if (!before) return err("Membre introuvable", 404)

  const allowed = ["firstName", "lastName", "sex", "birthDate", "phone", "email", "address", "faculty", "department", "level", "academicYear", "status", "photoUrl"]
  const data: Record<string, unknown> = {}
  for (const k of allowed) {
    if (k in body) {
      if (k === "birthDate") data[k] = body[k] ? new Date(body[k]) : null
      else data[k] = body[k]
    }
  }
  const after = await db.member.update({ where: { id }, data })
  await audit({ action: "UPDATE", entity: "Member", entityId: id, before, after, description: `Modification membre ${before.matricule}` })
  return ok(serialize(after))
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const before = await db.member.findUnique({ where: { id } })
  if (!before) return err("Membre introuvable", 404)
  await db.member.delete({ where: { id } })
  await audit({ action: "DELETE", entity: "Member", entityId: id, before, description: `Suppression membre ${before.matricule}` })
  return ok({ ok: true })
}
