declare module "klaro" {
    interface KlaroConfig {
        version: number;
        elementID?: string;
        storageMethod?: "cookie" | "localStorage";
        storageName?: string;
        cookieExpiresAfterDays?: number;
        default?: boolean;
        mustConsent?: boolean;
        acceptAll?: boolean;
        hideDeclineAll?: boolean;
        hideLearnMore?: boolean;
        noticeAsModal?: boolean;
        htmlTexts?: boolean;
        embedded?: boolean;
        groupByPurpose?: boolean;
        translations?: Record<string, unknown>;
        services?: KlaroService[];
        purposes?: string[];
        [key: string]: unknown;
    }

    interface KlaroService {
        name: string;
        title?: string;
        purposes?: string[];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cookies?: any[];
        required?: boolean;
        optOut?: boolean;
        default?: boolean;
        onlyOnce?: boolean;
        [key: string]: unknown;
    }

    function setup(config: KlaroConfig): void;
    function show(config?: KlaroConfig | undefined, modal?: boolean): void;
    function getManager(config?: KlaroConfig): unknown;

    const _default: {
        setup(config: KlaroConfig): void;
        show(config?: KlaroConfig | undefined, modal?: boolean): void;
        getManager(config?: KlaroConfig): unknown;
    };
    export default _default;
}

declare module "klaro/dist/klaro.css";
