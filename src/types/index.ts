export interface WasteItem {
  id: string;
  name: string;
  category: 'organic' | 'anorganic' | 'b3';
  description?: string;
  recycleTip?: string;
  imageUrl?: string;
  createdAt: string;
}

export interface ScanResult {
  id: string;
  wasteType: string;
  confidence: number;
  category: WasteItem['category'];
  timestamp: string;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  totalScans: number;
  joinedAt: string;
}
