export class LoggingService {
  logNewAccount(name: string, status: string) {
    console.log('New account made. Name: ' + name + ', status: ' + status);
  }

  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}