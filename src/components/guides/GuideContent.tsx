'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

const components: Components = {
  h1: ({ children, ...props }) => (
    <h1 className="text-3xl font-bold tracking-tight text-foreground mb-8 mt-2" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="sr-only" {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-2xl font-bold text-foreground mt-12 mb-6 pb-2 border-b border-border" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-xl font-semibold text-foreground mt-10 mb-4" {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 className="text-lg font-semibold text-foreground mt-8 mb-3 flex items-center gap-2" {...props}>
      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0" />
      {children}
    </h5>
  ),
  h6: ({ children }) => {
    const text = String(children);
    const isTip = text.includes('Почему это важно') || text.includes('Пример из практики') ||
                  text.includes('Немного цифр') || text.includes('Реальная ситуация') ||
                  text.includes('Что стоит запомнить') || text.includes('Проверьте прямо сейчас') ||
                  text.includes('Для чего это нужно') || text.includes('Когда это выручает') ||
                  text.includes('Что выбрать') || text.includes('Менеджер паролей') ||
                  text.includes('Почему это случается') || text.includes('Цепочка уязвимости') ||
                  text.includes('SIM-карта');

    if (isTip) {
      return (
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-5 py-4 my-6">
          <p className="text-sm font-semibold text-primary mb-1">💡 {children}</p>
        </div>
      );
    }
    return (
      <h6 className="text-base font-semibold text-muted-foreground mt-6 mb-3 italic">
        {children}
      </h6>
    );
  },
  p: ({ children }) => (
    <p className="text-base text-foreground/85 leading-relaxed mb-4">
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="space-y-2 mb-6 ml-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="space-y-2 mb-6 ml-2 list-decimal list-inside" {...props}>
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-3 py-1 text-base text-foreground/85 leading-relaxed">
      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
      <span>{children}</span>
    </li>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic text-muted-foreground" {...props}>
      {children}
    </em>
  ),
  hr: () => (
    <hr className="my-10 border-border" />
  ),
  blockquote: ({ children }) => {
    const text = String(children);
    const isNote = text.includes('Обратите внимание') || text.includes('Важно');
    if (isNote) {
      return (
        <div className="bg-amber-500/5 border-l-4 border-amber-500 rounded-r-lg px-5 py-4 my-6">
          <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-1">⚠️ {children}</p>
        </div>
      );
    }
    return (
      <blockquote className="border-l-4 border-border pl-4 italic text-muted-foreground my-6">
        {children}
      </blockquote>
    );
  },
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-border">
      <table className="w-full text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-muted" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => (
    <tbody className="divide-y divide-border" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }) => (
    <tr className="hover:bg-muted/50 transition-colors" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }) => (
    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-4 py-3 text-sm text-foreground/85" {...props}>
      {children}
    </td>
  ),
};

export function GuideContent({ content }: { content: string }) {
  const cleanedContent = content
    .replace(/&#x09;/g, '')
    .replace(/#######/g, '');

  return (
    <article className="max-w-3xl mx-auto">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {cleanedContent}
      </ReactMarkdown>
    </article>
  );
}
