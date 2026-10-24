export const ROUTE_TRANSITION_START = "the12:route-transition-start";

export function startRouteTransition() {
  window.dispatchEvent(new Event(ROUTE_TRANSITION_START));
}
