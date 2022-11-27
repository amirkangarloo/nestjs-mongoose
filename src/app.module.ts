import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {dbName: 'studentDB'}),
    MongooseModule.forFeature([{name: 'student', schema: StudentSchema}])
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
