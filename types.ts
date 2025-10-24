
export interface NewsletterEvent {
  id: string;
  originalHeaderTable: string;
  originalDescriptionTable: string;
  originalInfoLinkTable: string;
  originalSeparatorTable: string;
  
  tags: string[];
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  descriptionHtml: string;
  infoLinkUrl: string;

  isEnabled: boolean;
}

export interface SpecialBlock {
  id: string;
  originalHtml: string;
  imageUrl: string;
  title: string;
  description: string;
  schedule: string;
  location: string;
  age: string;
  isEnabled: boolean;
}
