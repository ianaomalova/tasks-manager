import {icons, LucideIconData} from 'lucide-angular';
import {iconCategories} from '../configs/icon-categories.config';

export interface CategorizedIcons {
  categoryKey: string;
  categoryName: string;
  icons: {
    name: string;
    icon: LucideIconData;
  } [];
}

const typedIcons: { [key: string]: LucideIconData } = icons;

export function toKebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

export function toCamelCase(str: string): string {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// Получение объекта иконки по имени (kebab-case)
export function getIconByName(iconName: string): LucideIconData {
  const camelCaseName = toCamelCase(iconName);
  return typedIcons[camelCaseName];
}

export function getCategorizedIcons(): CategorizedIcons[] {
  return Object.entries(iconCategories).map(([key, category]) => ({
    categoryKey: key,
    categoryName: category.name,
    icons: Object.entries(typedIcons)
      .filter(([name]) => {
        const iconName = toKebabCase(name);
        return category.icons.includes(iconName);
      })
      .map(([name, icon]) => ({
        name: toKebabCase(name),
        icon: icon as LucideIconData,
      })),
  }));
}
