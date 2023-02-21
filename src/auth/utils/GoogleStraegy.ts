import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";



export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            clintID: '412936899675-cbb4k2kimqspdt5rmjeg0m5riiba6pqs.apps.googleusercontent.com',
            clintSecret: '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',
            callbackURL: 'http://localhost:30001/api/auth/google/redirect',
            scope: ['profile', 'email'],
        });
    }

}