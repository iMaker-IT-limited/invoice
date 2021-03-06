import { Animation } from "@ionic/core";

export function myLeaveAnimation(
  AnimationC: Animation,
  baseEl: HTMLElement
): Promise<Animation> {
  const baseAnimation = new AnimationC();

  const backdropAnimation = new AnimationC();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop"));

  const wrapperAnimation = new AnimationC();
  const wrapperEl = baseEl.querySelector(".modal-wrapper");
  wrapperAnimation.addElement(wrapperEl);
  // tslint:disable-next-line:no-non-null-assertion
  const wrapperElRect = wrapperEl!.getBoundingClientRect();

  wrapperAnimation
    .beforeStyles({ opacity: 1 })
    .fromTo("translateY", "0%", `-100%`);

  backdropAnimation.fromTo("opacity", 0.4, 0.0);

  return Promise.resolve(
    baseAnimation
      .addElement(baseEl)
      .easing("ease-out")
      .duration(250)
      .add(backdropAnimation)
      .add(wrapperAnimation)
  );
}
