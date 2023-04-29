import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { plainToClass } from "class-transformer";

export function SerializeResponse(dto: any){
   return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor{
    constructor(private dto: any){
    }
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>{
        return next.handle().pipe(map((result: any)=>{
              return plainToClass(this.dto,result, {
                excludeExtraneousValues: true
              });
        }));
    }
}