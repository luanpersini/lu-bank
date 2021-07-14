export const makeAccountNumber = (): string => (
  String(new Date().getTime()).substring(String(new Date().getTime()).length - 8, String(new Date().getTime()).length)
)
