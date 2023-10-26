import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarcodeService } from './barcode/barcode.service';
import { BarcodeController } from './barcode/barcode.controller';

@Module({
  imports: [],
  controllers: [AppController , BarcodeController],
  providers: [AppService, BarcodeService],
})
export class AppModule {}
