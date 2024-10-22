export interface Meeting {
  meeting_id: number;
  expert_id: number;
  client_id: number;
  slot_id: number;
  start_time: Date;
  end_time: Date;
  meeting_type: string;
  meeting_status: string;
}

export type MeetingMaterial = {
  material_id: number;
  meeting_id: number;
  material_link: string;
  description: string;
};

export interface Slot {
  slot_id: number;
  user_id: number;
  start_time: Date;
  end_time: Date;
  description: string;
  type_slot: string;
  is_availible: boolean;
}

export interface MeetingResult {
  result_id: number;
  meeting_id: number;
  material_link: string;
  description: string;
}

export interface Review {
  review_id: number;
  meeting_id: number;
  raiting: number;
  comment: string;
}