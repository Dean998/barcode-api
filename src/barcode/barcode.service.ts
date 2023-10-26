import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Injectable()
export class BarcodeService {
  async generateQRCode(url: string): Promise<string> {
    try {
      return await QRCode.toDataURL(url);
    } catch (error) {
      console.log(error)
      throw new Error('Failed to generate QR code');
    }
  }
}
