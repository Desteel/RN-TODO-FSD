import type { Coordinates, UrgencyStatus } from 'shared/kernel';

export type InnerFormData = {
  title: string;
} & Nullable<{
  photoSource: string;
  status: UrgencyStatus;
  location: Partial<{
    address: string;
    coordinate: Coordinates;
  }>;
}>;
