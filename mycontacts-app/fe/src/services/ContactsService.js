import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/f638069e-7cce-4782-a859-a1bd99843912/?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return this.httpClient.post('/contacts', contact);
  }
}

export default new ContactsService();
