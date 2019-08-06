export const required = value => value || typeof value === "number" || typeof value === "string" ? undefined : "Required"

export const checked = value => value ? undefined : 'Required'
