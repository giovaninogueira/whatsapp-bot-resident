import { Request, Response } from "express";
import { WhatsAppProvider } from "../providers/whatsapp/whatsapp.provider";

class GetBase64UseCase {
    /**
     * Get base64 and status
     * @param req 
     * @param resp 
     * @returns 
     */
    async execute(req: Request, resp: Response) {
        const status = await WhatsAppProvider.isActive();
        return resp.send({
            status: status,
            base64: !status ? WhatsAppProvider.base64 : null
        })
    }
}

export default GetBase64UseCase