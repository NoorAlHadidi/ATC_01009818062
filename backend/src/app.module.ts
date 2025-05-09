import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';
import { BookingsModule } from './bookings/bookings.module';
import { BookingController } from './booking/booking.controller';

@Module({
  imports: [EventsModule, ProfilesModule, AuthModule, BookingsModule],
  controllers: [AppController, BookingController],
  providers: [AppService],
})
export class AppModule {}
