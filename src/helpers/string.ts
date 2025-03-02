export const convertTitleToSlug = (title: string): string => {
    return title
        .toLowerCase()                     // Convert to lowercase
        .replace(/[^a-z0-9\s]/g, '')       // Remove special characters
        .trim()                            // Trim whitespace
        .replace(/\s+/g, '-')              // Replace spaces with hyphens
}