export type Lang = 'en' | 'zh' | 'ja';
export type Localized = Record<Lang, string>;

export type Publication = {
  slug: string;
  year: number;
  type: 'journal' | 'conference' | 'preprint';
  title: Localized;
  authors: string[];
  venue: string;
  status?: Localized;
  abstract?: Localized;
  tags: string[];
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
  title: string;
  eyebrow: Localized;
  summary: Localized;
  tags: string[];
  metrics?: { value: string; label: Localized }[];
  featured?: boolean;
};
