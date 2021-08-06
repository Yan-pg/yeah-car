import { v4 as uuidvV4 } from 'uuid';

class Specification {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    if (this.id) {
      this.id = uuidvV4();
    }
  }
}

export { Specification };
