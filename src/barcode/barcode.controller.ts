import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BarcodeService } from './barcode.service';

@Controller('barcode')
export class BarcodeController {
  constructor(private readonly barcodeService: BarcodeService) {}

  @Post('/generate-qr')
  async generateQRCode(@Body('url') url: string) {
    if (!url) {
      throw new HttpException('URL is required', HttpStatus.BAD_REQUEST);
    }

    try {
      const qrCodeImage = await this.barcodeService.generateQRCode(url);
      return { qrCodeImage };
    } catch (error) {
      throw new HttpException(
        'Failed to generate QR code',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
