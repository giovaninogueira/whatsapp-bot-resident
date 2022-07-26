import { Request, Response } from "express";
import { WhatsAppProvider } from "../providers/whatsapp/whatsapp.provider";

class GetBase64UseCase {
    async execute(req: Request, resp: Response) {
        const isActive = await WhatsAppProvider.isActive()
        if (isActive) {
            return resp.send({
                isActive: isActive,
                base64: null
            })
        }
        return resp.send({
            base64: WhatsAppProvider.base64
        })
    }
}

export default GetBase64UseCase