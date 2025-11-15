
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

export interface BlogPost {
  title: string;
  summary: string;
}
