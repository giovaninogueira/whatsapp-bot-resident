import { Request, Response } from "express";
import App from "../app";

class GetBase64UseCase {
    /**
     * Get base64 and status
     * @param req 
     * @param resp 
     * @returns 
     */
    async execute(req: Request, resp: Response) {
        const status = await App.whatsAppProvider.isActive();
        return resp.send({
            status: status,
            base64: !status ? App.whatsAppProvider.base64 : null
        })
    }
}

export default GetBase64UseCase