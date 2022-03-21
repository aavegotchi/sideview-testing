export const convertInlineSVGToBlobURL = (svg: string) => {
  const blob = new Blob([svg], { type: "image/svg+xml" });
  return URL.createObjectURL(blob);
};

export const animationStyles = `
    svg {
      animation-name:down;
      animation-duration:0.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-timing-function: steps(1);
    }

    .gotchi-shadow {
      animation: up 0.5s infinite linear steps(2);
       animation-name:up;
       animation-duration:0.5s;
       animation-iteration-count: infinite;
       animation-timing-function: linear;
       animation-timing-function: steps(2);
    }

    .gotchi-wearable {
      animation-name:down;
      animation-duration:0.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-timing-function: steps(1);
    }

    .gotchi-handsDownClosed, .gotchi-handsUp, .gotchi-handsDownOpen, .gotchi-handsDownClosed, .gotchi-body, .gotchi-eyeColor, .gotchi-collateral, .gotchi-cheek, .gotchi-primary-mouth, .gotchi-wearable, .gotchi-sleeves   {
       animation-name:down;
       animation-duration:0.5s;
       animation-iteration-count: infinite;
       animation-timing-function: linear;
       animation-timing-function: steps(2);
    }


.wearable-bg {
  animation-name:none !important;
}


@keyframes downHands {
  from {
    --hand_translateY: -4px;
  }
 to {
    --hand_translateY: -3.5px;
  }
}


@keyframes up {
  from {
    transform: translate(0px, 0);
  }
 to {
    transform: translate(0px, -1px);
  }
}


@keyframes down {
 from {
   transform: translate(0px, 0);
    }
 to {
      transform: translate(0px, 1px);
    }
}
`;
