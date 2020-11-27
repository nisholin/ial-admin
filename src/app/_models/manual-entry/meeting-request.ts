import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class MeetingRequest {
    code                : String;
    emp_code            : String;
    department_id	    : Number;
    no_of_persons       : Number;
    date                : Date;
    status              : Number;
    remarks             : String;
    device              : String;
    created_by          : String;
    meeting_type_id     : String;
    meeting_room        : String;
}