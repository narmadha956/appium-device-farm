import { Platform } from '../types/Platform';

export interface IDevice {
  systemPort: number;
  host: string;
  proxyPort?: number;
  proxyHost?: string;
  wdaLocalPort?: number;
  name: string;
  udid: string;
  state: string;
  sdk: string;
  platform: Platform;
  deviceType: string;
  busy: boolean;
  userBlocked: boolean;
  realDevice: boolean;
  session_id?: string;
  offline?: boolean;
  mjpegServerPort?: number;
  lastCmdExecutedAt?: number;
  totalUtilizationTimeMilliSec: number;
  sessionStartTime: number;
  newCommandTimeout?: number;
  cloud?: any;
  derivedDataPath?: string;
  chromeDriverPath?: any;
  capability?: any;
  adbRemoteHost: string;
  adbPort: number;
}
