/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: accommodations
 * @catalog This collection is an eCommerce catalog
 * Interface for Accommodations
 */
export interface Accommodations {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  itemName?: string;
  /** @wixFieldType number */
  itemPrice?: number;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  itemImage?: string;
  /** @wixFieldType text */
  itemDescription?: string;
  /** @wixFieldType text */
  amenities?: string;
  /** @wixFieldType text */
  accommodationType?: string;
  /** @wixFieldType number */
  capacity?: number;
  /** @wixFieldType text */
  location?: string;
  /** @wixFieldType boolean */
  hasPool?: boolean;
}


/**
 * Collection ID: contactinquiries
 * Interface for ContactInquiries
 */
export interface ContactInquiries {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  senderName?: string;
  /** @wixFieldType text */
  senderEmail?: string;
  /** @wixFieldType text */
  senderPhone?: string;
  /** @wixFieldType text */
  messageContent?: string;
  /** @wixFieldType datetime */
  submissionDate?: Date | string;
}


/**
 * Collection ID: testimonials
 * Interface for CustomerTestimonials
 */
export interface CustomerTestimonials {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  customerName?: string;
  /** @wixFieldType text */
  reviewText?: string;
  /** @wixFieldType number */
  rating?: number;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  customerPhoto?: string;
  /** @wixFieldType date */
  reviewDate?: Date | string;
  /** @wixFieldType text */
  customerLocation?: string;
}


/**
 * Collection ID: tours
 * @catalog This collection is an eCommerce catalog
 * Interface for Tours
 */
export interface Tours {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  itemName?: string;
  /** @wixFieldType number */
  itemPrice?: number;
  /** @wixFieldType text */
  itemDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  itemImage?: string;
  /** @wixFieldType text */
  itinerary?: string;
  /** @wixFieldType text */
  attractions?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  attractionImages?: string;
  /** @wixFieldType number */
  duration?: number;
  /** @wixFieldType text */
  difficultyLevel?: string;
  /** @wixFieldType text */
  category?: string;
}
