export type Key = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "950"

export interface ColorPalette {
    ['50']?: string
    ['100']?: string
    ['200']?: string
    ['300']?: string
    ['400']?: string
    ['500']?: string
    ['600']?: string
    ['700']?: string
    ['800']?: string
    ['900']?: string
    ['950']?: string
}

export interface ThemePalette {
    primary?: ColorPalette
    secondary?: ColorPalette
}

export type Level = keyof ThemePalette