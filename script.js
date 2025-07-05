class WhatsAppFormatter {
    constructor() {
        this.inputText = document.getElementById('input-text');
        this.preview = document.getElementById('preview');
        this.copyBtn = document.getElementById('copy-btn');
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.inputText.addEventListener('input', () => this.updatePreview());
        this.copyBtn.addEventListener('click', () => this.copyToClipboard());
        
        // Inicializar com texto vazio
        this.updatePreview();
    }

    updatePreview() {
        const text = this.inputText.value;
        
        if (text.trim() === '') {
            this.preview.innerHTML = '<div class="message-placeholder"><p>Digite algo no editor para ver como ficará no WhatsApp!</p></div>';
            return;
        }

        // Atualizar preview com formatação visual do WhatsApp
        this.preview.innerHTML = this.formatForWhatsAppPreview(text);
    }

    formatForWhatsAppPreview(text) {
        // Tratar todo o texto como uma única mensagem
        let formatted = this.formatLineForPreview(text);
        
        // Converter quebras de linha para <br> no preview
        formatted = formatted.replace(/\n/g, '<br>');
        
        return `<div class="message-bubble">${formatted}<div class="message-time">${this.getCurrentTime()}</div></div>`;
    }

    formatLineForPreview(text) {
        let formatted = text;

        // Escapar HTML primeiro
        formatted = formatted.replace(/&/g, '&amp;')
                           .replace(/</g, '&lt;')
                           .replace(/>/g, '&gt;');

        // Negrito: *texto*
        formatted = formatted.replace(/\*([^*]+)\*/g, '<strong>$1</strong>');

        // Itálico: _texto_
        formatted = formatted.replace(/_([^_]+)_/g, '<em>$1</em>');

        // Tachado: ~texto~
        formatted = formatted.replace(/~([^~]+)~/g, '<del>$1</del>');

        // Monoespaçado: ```texto```
        formatted = formatted.replace(/```([^`]+)```/g, '<pre>$1</pre>');

        // Código inline: `texto`
        formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');

        // Citação: > texto
        formatted = formatted.replace(/^>\s*(.+)$/gm, '<blockquote>$1</blockquote>');

        // Lista com marcadores: * item ou - item
        formatted = formatted.replace(/^[*-]\s+(.+)$/gm, '<li>$1</li>');
        formatted = formatted.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');

        // Lista numerada: 1. item
        formatted = formatted.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');
        // Substituir listas com marcadores já processadas
        formatted = formatted.replace(/<ul>(<li>.*<\/li>)<\/ul>/gs, (match, content) => {
            if (content.includes('<li>')) {
                return match; // Já é lista com marcadores
            }
            return `<ol>${content}</ol>`;
        });

        // Corrigir listas numeradas
        formatted = formatted.replace(/(<li>.*<\/li>)(?!.*<ul>)/gs, (match) => {
            if (!match.includes('<ul>') && !match.includes('<ol>')) {
                return `<ol>${match}</ol>`;
            }
            return match;
        });

        return formatted;
    }

    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    }

    formatForWhatsApp(text) {
        // Converter quebras de linha para \n
        let formatted = text.replace(/\n/g, '\\n');
        
        // Retornar o texto com os símbolos do WhatsApp preservados
        return formatted;
    }

    async copyToClipboard() {
        try {
            const text = this.inputText.value;
            const textToCopy = this.formatForWhatsApp(text);
            
            await navigator.clipboard.writeText(textToCopy);
            
            // Feedback visual
            this.copyBtn.textContent = '✅ Copiado!';
            this.copyBtn.classList.add('copied');
            
            // Mostrar toast
            this.showToast('Texto copiado para a área de transferência!');
            
            // Resetar botão após 2 segundos
            setTimeout(() => {
                this.copyBtn.textContent = '📋 Copiar Texto';
                this.copyBtn.classList.remove('copied');
            }, 2000);
            
        } catch (err) {
            console.error('Erro ao copiar:', err);
            this.showToast('Erro ao copiar texto', 'error');
        }
    }

    showToast(message, type = 'success') {
        // Remover toast existente
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        // Criar novo toast
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Mostrar toast
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Remover toast após 3 segundos
        setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hide');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new WhatsAppFormatter();
});

// Adicionar atalhos de teclado
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'b':
                e.preventDefault();
                insertFormatting('*');
                break;
            case 'i':
                e.preventDefault();
                insertFormatting('_');
                break;
            case 'u':
                e.preventDefault();
                insertFormatting('~');
                break;
            case 'k':
                e.preventDefault();
                insertFormatting('`');
                break;
        }
    }
});

function insertFormatting(symbol) {
    const textarea = document.getElementById('input-text');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    let newText;
    if (selectedText) {
        // Se há texto selecionado, envolve com o símbolo
        newText = textarea.value.substring(0, start) + 
                 symbol + selectedText + symbol + 
                 textarea.value.substring(end);
    } else {
        // Se não há texto selecionado, insere os símbolos
        newText = textarea.value.substring(0, start) + 
                 symbol + symbol + 
                 textarea.value.substring(end);
    }
    
    textarea.value = newText;
    textarea.focus();
    
    // Posicionar cursor
    if (selectedText) {
        textarea.setSelectionRange(start + symbol.length, end + symbol.length);
    } else {
        textarea.setSelectionRange(start + symbol.length, start + symbol.length);
    }
    
    // Atualizar preview
    textarea.dispatchEvent(new Event('input'));
}