import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './controller';
import { StudentSchema } from './schema';
import { StudentService } from './service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME}),
    MongooseModule.forFeature([{name: 'student', schema: StudentSchema}])
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}
