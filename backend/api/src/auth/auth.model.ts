import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export class Device {
  @prop()
  refresh: string;
  @prop()
  ip: string;
  @prop()
  user_agent: string;
  @prop()
  trusted: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AuthModel extends Base {}

export class AuthModel extends TimeStamps {
  @prop()
  name: string;

  @prop({ unique: true })
  email: string;

  @prop({ type: () => [String] })
  chanels: string[];

  @prop()
  password: string;

  @prop({ default: 0 })
  balance: number;

  @prop({ type: () => [Device] })
  devices: Device[];
}
