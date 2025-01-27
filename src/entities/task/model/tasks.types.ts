import type { Location, OrderedItem, UrgencyStatus } from 'shared/kernel';

export type Task = OrderedItem & {
  id: string;
  title: string;
  done: boolean;
} & Partial<{
    photoSource: string;
    location: Location;
    status: UrgencyStatus;
  }>;

export type EditableTaskData = Omit<Task, 'id' | 'order' | 'done'>;
