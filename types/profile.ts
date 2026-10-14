export interface SocialLink {
    id: string;
    label: string;
    url: string;
}

export interface ContentCard {
    id: string;
    content: string;
}

export interface Button {
  id: string;
  label: string;
  enabled: boolean;
  url: string | null;
}

export interface ProfileTheme {
  backgroundColor: string;
  containerColor: string;
  borderColor: string;
  cardColor: string;
  textColor: string;
}

export interface ProfileMetadata {
  title: string;
  description: string;
}

export interface ProfileContent {
  profile: {
    imageUrl: string | null;
    metadata: ProfileMetadata;
  };

  socialLinks: SocialLink[];
  cards: ContentCard[];
  navigation: Button[];
  theme: ProfileTheme;
}