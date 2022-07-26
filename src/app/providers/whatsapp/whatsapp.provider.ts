import { create, Whatsapp } from "venom-bot";

/**
 * Get base64
 * @param base64Qrimg 
 */
const base64 = (base64Qrimg: string) => {
  WhatsAppProvider.base64 = base64Qrimg
}

/**
 * Get status session
 * @param statusSession 
 */
const statusSession = (statusSession: string, session: string) => {
  WhatsAppProvider.statusSession = statusSession
}

const option = {
  multidevice: true,
  headless: true
}

class WhatsAppProvider {
  static base64: string;
  static client: Whatsapp;
  static statusSession: string

  /**
   * Connect with whatsapp
   * @param session 
   */
  static async connect(session: string) {
    // connect whatsapp
    create(session, base64, undefined, option).then((client) => {
      WhatsAppProvider.client = client;
    }).catch((erro) => {
      console.error(erro);
    });
  }

  /**
   * Verify if is active
   * @returns 
   */
  static async isActive() {
    if (WhatsAppProvider.client) {
      return await WhatsAppProvider.client.isConnected();
    }
    return false;
  }

  /**
   * Close connection
   */
  static async close() {
    if (WhatsAppProvider.client) {
      await WhatsAppProvider.client.close();
    }
  }
}

export { WhatsAppProvider };
