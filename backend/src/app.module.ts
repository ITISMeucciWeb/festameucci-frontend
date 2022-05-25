import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {join} from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AppResolver } from './app.resolver';


@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'schema.gql'),
            subscriptions: {
                'graphql-ws': true
            }
        }),
        MongooseModule.forRoot('mongodb://localhost/festameucci'),
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService, AppResolver],
})
export class AppModule {
}
