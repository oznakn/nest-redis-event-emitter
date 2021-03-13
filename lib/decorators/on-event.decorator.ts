import { SetMetadata } from '@nestjs/common';

import { EVENT_LISTENER_METADATA } from '../constants';

/**
 * `@OnEvent` decorator metadata
 */
export interface OnEventMetadata {
  /**
   * Event (name or pattern) to subscribe to.
   */
  event: string;
}

/**
 * Event listener decorator.
 * Subscribes to events based on the specified name(s).
 *
 * @param name event to subscribe to
 */
export const OnEvent = (
  event: string,
  // options?: OnOptions,
): MethodDecorator =>
  SetMetadata(EVENT_LISTENER_METADATA, { event } as OnEventMetadata); // ,options
