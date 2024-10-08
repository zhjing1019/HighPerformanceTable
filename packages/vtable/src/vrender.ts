/**
 * render
 */
import { loadPoptip } from '@visactor/vrender-components';
import '@visactor/vrender-core';
import { container, isBrowserEnv, isNodeEnv, preLoadAllModule } from '@visactor/vrender-core';
import {
  loadBrowserEnv,
  loadNodeEnv,
  registerArc,
  registerCircle,
  registerGroup,
  registerImage,
  registerLine,
  registerRect,
  registerRichtext,
  registerSymbol,
  registerText,
} from '@visactor/vrender-kits';

let registed = false;
export function registerForVrender() {
  if (registed) {
    return;
  }
  registed = true;
  // 注册内置组件
  preLoadAllModule();

  if (isBrowserEnv()) {
    loadBrowserEnv(container);
  } else if (isNodeEnv()) {
    loadNodeEnv(container);
  }
  registerArc();
  registerCircle();
  registerGroup();
  registerImage();
  registerLine();
  registerRect();
  registerRichtext();
  registerSymbol();
  registerText();
  loadPoptip();
}

export { Direction } from '@visactor/vrender-core';
export { GroupFadeIn } from '@visactor/vrender-core';
export { GroupFadeOut } from '@visactor/vrender-core';

export * from '@visactor/vrender-core';
export * from '@visactor/vrender-kits';
export * from '@visactor/vrender-components';
