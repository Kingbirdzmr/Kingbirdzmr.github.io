export type Lang = 'en' | 'zh' | 'ja';
export type Localized = Record<Lang, string>;

export type PublicationStatusKind =
  | 'published'
  | 'early-access'
  | 'accepted'
  | 'accepted-unpublished'
  | 'under-review'
  | 'preprint'
  | 'patent';

export type Publication = {
  slug: string;
  year: number;
  type: 'journal' | 'conference' | 'preprint' | 'patent';
  title: Localized;
  authors: string[];
  correspondingAuthors?: string[];
  venue: string;
  details?: Localized;
  classificationZh?: string[];
  impactFactor?: { value: number; year: number };
  status?: Localized;
  statusKind?: PublicationStatusKind;
  abstract?: Localized;
  unavailableNote?: Localized;
  detailPage?: boolean;
  tags?: string[];
  featured?: boolean;
  links?: {
    doi?: string;
    pdf?: string;
    code?: string;
    project?: string;
    arxiv?: string;
  };
  bibtex?: string;
};

export type Project = {
  slug: string;
  title: Localized;
  eyebrow: Localized;
  summary: Localized;
  tags: string[];
  metrics?: { value: string; label: Localized }[];
  featured?: boolean;
};

export type SelectedProject = {
  slug: string;
  title: Localized;
  summary: Localized;
  tags: string[];
  publicationSlug: string;
};
