import { Controller, Get } from "@nestjs/common";

@Controller('auth')
export class AuthController {

    @Get('google/login')
    handleLogin() {
        return { msg: "Google authenticaton" }
    }

    @Get('google/redirect')
    handleRedirect() {
        return { msg: "hii the msg is redireted to google! congo" }
    }



}