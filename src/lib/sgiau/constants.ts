// SGIAU — central constants

export const APP_NAME = "SGIAU"
export const APP_FULL_NAME = "Système de Gestion Intégrée de l'Amicale Universitaire"
export const CURRENCY = "FCFA"

export type Role =
  | "PRESIDENT"
  | "SECRETAIRE"
  | "TRESORIER"
  | "CAISSIER"
  | "COMMISSAIRE"
  | "ADMIN_IT"
  | "MEMBER"
  | "CUSTOM"

export const ROLE_LABELS: Record<string, string> = {
  PRESIDENT: "Président",
  SECRETAIRE: "Secrétaire général",
  TRESORIER: "Trésorier",
  CAISSIER: "Caissier",
  COMMISSAIRE: "Commissaire aux comptes",
  ADMIN_IT: "Administrateur informatique",
  MEMBER: "Membre",
  CUSTOM: "Rôle personnalisé",
}

export const ROLE_COLORS: Record<string, string> = {
  PRESIDENT: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
  SECRETAIRE: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
  TRESORIER: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200",
  CAISSIER: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200",
  COMMISSAIRE: "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-200",
  ADMIN_IT: "bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
  MEMBER: "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200",
  CUSTOM: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-950 dark:text-fuchsia-200",
}

export const MEMBER_STATUS_LABELS: Record<string, string> = {
  ACTIVE: "Actif",
  SUSPENDED: "Suspendu",
  ARCHIVED: "Archivé",
  PENDING: "En attente",
}

export const MEMBER_STATUS_COLORS: Record<string, string> = {
  ACTIVE: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
  SUSPENDED: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
  ARCHIVED: "bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
  PENDING: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200",
}

export const PAYMENT_MODE_LABELS: Record<string, string> = {
  CASH: "Espèces",
  MOBILE: "Mobile money",
  BANK: "Virement bancaire",
  CARD: "Carte",
  CHEQUE: "Chèque",
}

export const PAYMENT_STATUS_LABELS: Record<string, string> = {
  PAID: "Payé",
  PARTIAL: "Partiel",
  CANCELLED: "Annulé",
}

export const COTISATION_KIND_LABELS: Record<string, string> = {
  ANNUAL: "Cotisation annuelle",
  MONTHLY: "Cotisation mensuelle",
  EXCEPTIONAL: "Contribution exceptionnelle",
  EVENT: "Participation événement",
  DONATION: "Don",
}

export const ADHESION_STATUS_LABELS: Record<string, string> = {
  PENDING: "En attente",
  SG_APPROVED: "Validé par le secrétaire",
  PRESIDENT_APPROVED: "Validé par le président",
  REFUSED: "Refusé",
}

export const EXPENSE_STATUS_LABELS: Record<string, string> = {
  PENDING: "En attente",
  VALIDATED: "Validée",
  REJECTED: "Rejetée",
}

export const ACTIVITY_STATUS_LABELS: Record<string, string> = {
  PLANNED: "Planifiée",
  ONGOING: "En cours",
  DONE: "Terminée",
  CANCELLED: "Annulée",
}

export const MODULE_GROUPS: { group: string; modules: { id: string; label: string; icon: string }[] }[] = [
  {
    group: "Pilotage",
    modules: [
      { id: "dashboard", label: "Tableau de bord", icon: "LayoutDashboard" },
      { id: "statistics", label: "Statistiques", icon: "BarChart3" },
      { id: "search", label: "Recherche globale", icon: "Search" },
    ],
  },
  {
    group: "Membres",
    modules: [
      { id: "members", label: "Membres", icon: "Users" },
      { id: "adhesion", label: "Adhésions", icon: "UserPlus" },
      { id: "cards", label: "Cartes membres", icon: "CreditCard" },
      { id: "member-space", label: "Espace membre", icon: "Smartphone" },
    ],
  },
  {
    group: "Finances",
    modules: [
      { id: "cotisations", label: "Cotisations", icon: "Wallet" },
      { id: "receipts", label: "Reçus", icon: "ReceiptText" },
      { id: "finance", label: "Comptabilité", icon: "BookOpen" },
      { id: "cash", label: "Caisse", icon: "Landmark" },
      { id: "expenses", label: "Dépenses", icon: "TrendingDown" },
    ],
  },
  {
    group: "Vie associative",
    modules: [
      { id: "activities", label: "Activités", icon: "CalendarDays" },
      { id: "meetings", label: "Réunions", icon: "UsersRound" },
      { id: "presences", label: "Présences", icon: "ClipboardCheck" },
      { id: "elections", label: "Élections", icon: "Vote" },
      { id: "votes", label: "Votes internes", icon: "CheckSquare" },
    ],
  },
  {
    group: "Ressources",
    modules: [
      { id: "documents", label: "Documents", icon: "FolderArchive" },
      { id: "inventory", label: "Inventaire", icon: "Boxes" },
      { id: "formations", label: "Formations", icon: "GraduationCap" },
      { id: "library", label: "Bibliothèque", icon: "Library" },
      { id: "partners", label: "Partenaires", icon: "Handshake" },
      { id: "archives", label: "Archives", icon: "Archive" },
    ],
  },
  {
    group: "Système",
    modules: [
      { id: "notifications", label: "Notifications", icon: "Bell" },
      { id: "import-export", label: "Import / Export", icon: "ArrowUpDown" },
      { id: "users", label: "Utilisateurs & sécurité", icon: "ShieldCheck" },
      { id: "audit", label: "Journal d'audit", icon: "ScrollText" },
      { id: "sync", label: "Synchronisation", icon: "RefreshCw" },
    ],
  },
]

export const ALL_MODULE_IDS = MODULE_GROUPS.flatMap((g) => g.modules.map((m) => m.id))
