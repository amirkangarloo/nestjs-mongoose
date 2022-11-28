import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME}),
    MongooseModule.forFeature([{name: 'student', schema: StudentSchema}])
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
