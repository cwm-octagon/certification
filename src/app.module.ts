import {Module} from '@nestjs/common';
import { CertificateService } from './service/certificate.service';
import { CertificateController } from './controller/certificate.controller';

@Module({
    imports: [

    ],
    providers: [CertificateService],
    controllers: [CertificateController]
})
export class AppModule {
}