import { PartialThemeVariables} from '@alyle/ui';
import {color} from '@alyle/ui/color';

/**
 * For light theme
 * Theme name = minima-light
 */
export class CustomMinimaLight implements PartialThemeVariables {
  name = 'minima-light';
  primary = {
    default: color(0x1A49BA),
    contrast: color(0xffffff)
  };
  accent = {
    default: color(0xe91e63),
    contrast: color(0xffffff)
  };
  warn = {
    default: color(0xDE0606),
    contrast: color(0xffffff)
  };
}

/**
 * For dark theme
 * Theme name = minima-dark
 */
export class CustomMinimaDark implements PartialThemeVariables {
  name = 'minima-dark';
  primary = {
    default: color(0x9c27b0),
    contrast: color(0xffffff)
  };
  accent = {
    default: color(0x69f0ae),
    contrast: color(0x202020)
  };
}
