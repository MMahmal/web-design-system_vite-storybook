import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { NavigationProps } from './types';

export function Navigation({ 
  items, 
  position = 'top',
  className,
  collapsible = false,
  showIcons = true,
}: NavigationProps) {
  const positionClasses = {
    top: 'flex-row',
    bottom: 'flex-row',
    left: 'flex-col',
    right: 'flex-col',
  };

  return (
    <NavigationMenu
      className={cn(
        "flex",
        positionClasses[position],
        position === 'left' || position === 'right' ? 'h-full' : 'w-full',
        className
      )}
    >
      <NavigationMenuList className={cn(
        position === 'left' || position === 'right' ? 'flex-col' : 'flex-row'
      )}>
        {items.map((item) => (
          <NavigationMenuItem key={item.id}>
            {item.children ? (
              <>
                <NavigationMenuTrigger className="h-10">
                  {showIcons && item.icon}
                  <span className="ml-2">{item.label}</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <NavigationMenuLink asChild>
                          <a
                            href={child.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {showIcons && child.icon}
                            <div className="text-sm font-medium leading-none">{child.label}</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <a
                  href={item.href}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  {showIcons && item.icon}
                  <span className="ml-2">{item.label}</span>
                </a>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}