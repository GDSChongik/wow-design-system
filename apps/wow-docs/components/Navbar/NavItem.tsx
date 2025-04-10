"use client";

import Text from "@components/Text";
import { css, cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { useState } from "react";
import type { IconProps } from "wowds-icons";
import { DownArrow2 } from "wowds-icons";

export interface NavItemProps {
  href: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  alt: string;
  label: string;
  children?: {
    href: string;
    label: string;
  }[];
}

const NavItem = ({ href, icon: Icon, alt, label, children }: NavItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const segment = useSelectedLayoutSegments() || [];

  const currentPath = `/${segment.join("/")}`;
  const isActive = currentPath === href;

  const handleClickNavItem = () => {
    if (children?.length) {
      setExpanded((prev) => !prev);
    }
  };

  return (
    <styled.div listStyle="none" role="presentation">
      <Link
        aria-controls={children ? `${label}-submenu` : undefined}
        aria-expanded={expanded ? "true" : "false"}
        aria-haspopup={children?.length ? "true" : undefined}
        className={navItemStyle({ type: isActive ? "active" : "inactive" })}
        href={href}
        onClick={handleClickNavItem}
      >
        <Icon aria-label={alt} className={navItemIconStyle} stroke="black" />
        <Text as="div" typo="body1">
          {label}
        </Text>
        {children?.length && (
          <DownArrow2
            fill="sub"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0)" }}
          />
        )}
      </Link>
      {expanded && children && (
        <ul aria-labelledby={label} id={`${label}-submenu`} role="menu">
          {children.map((child) => (
            <li key={child.href} role="none">
              <Link
                aria-label={child.label}
                href={`${href}${child.href}`}
                role="menuitem"
                className={navItemStyle({
                  type:
                    segment[1] === child.href.split("/").pop()
                      ? "active"
                      : "inactive",
                })}
              >
                <Text as="div" style={{ paddingLeft: "22px" }} typo="body1">
                  {child.label}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </styled.div>
  );
};

export default NavItem;

const navItemStyle = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "sm",
    padding: "11px 18px 11px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
  },
  variants: {
    type: {
      active: {
        backgroundColor: "monoBackgroundPressed",
      },
      inactive: {
        backgroundColor: "white",
      },
    },
  },
});
const navItemIconStyle = css({ width: "20px", height: "20px" });
