/*==================== VARIABLES CSS ====================*/
export const header_height = `3em`;

/*========== Color ==========*/
export const color = 230;

  /* HSL color mode */
export const first_color = `hsl(${color}, 69%, 61%)`;
export const first_color_second = `hsl(${color}, 30%, 8%)`;
export const first_color_alt = `hsl(${color}, 57%, 53%)`;
export const first_color_lighter = `hsl(${color}, 92%, 85%)`;
export const title_color = `hsl(${color}, 8%, 95%)`;
export const text_color = `hsl(${color}, 8%, 75%)`;
export const text_color_light = `hsl(${color}, 8%, 65%)`;
export const input_color = `hsl(${color}, 29%, 16%)`;
export const body_color = `hsl(${color}, 28%, 12%)`;
export const scroll_bar_color = `hsl(${color}, 12%, 48%)`;
export const scroll_thumb_color = `hsl(${color}, 12%, 36%))`;
export const container_color = `hsl(${color}, 29%, 16%)`;

/*========== Font and typography ==========*/
export const body_font = `Poopins`;

/* 0.5rem = 8px, 1rem = 16px, 1.5rem = 24px ...*/
export let big_font_size = `2rem`;
export let h1_font_size = `1.5rem`;
export let h2_font_size = `1.25rem`;
export let h3_font_size = `1.125rem`;
export let normal_font_size = `.938rem`;
export let small_font_size = `.813rem`;
export let smaller_font_size = `.75rem`;

const width = window.innerWidth;
if(width > 968) {
  big_font_size = '3rem';
  h1_font_size = '2.25rem';
  h2_font_size = '1.5rem';
  h3_font_size = '1.25rem'
  normal_font_size = '1rem';
  small_font_size = '.875rem';
  smaller_font_size = '.813rem';
}

/*========== Font weight ==========*/
export const font_medium = 500;
export const font_semi_bold = 600;

/*========== Margins Bottom ==========*/
/* .25rem = 4px, .5rem = 8px, .75rem = 12px ...*/
export const mb_0_25 = `.25rem`;
export const mb_0_50 = `.5rem`;
export const mb_0_75 = `.75rem`;
export const mb_1 = `1rem`;
export const mb_1_5 = `1.5rem`;
export const mb_2 = `2rem`;
export const mb_2_5 = `2.5rem`;
export const mb_3 = `3rem`;

/*========== z index ==========*/
export const z_tooltip = 10;
export const z_fixed = 100;
export const z_modal= 1000;