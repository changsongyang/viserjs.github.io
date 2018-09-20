export const translation = {
    function: {
        cn: '功能',
        en: 'FUNCTION',
        sub: {
            download: {
                cn: '下载',
                en: 'download'
            },
            import: {
                cn: '导入配置',
                en: 'import options'
            },
            export: {
                cn: '导出配置',
                en: 'export options'
            },
            refresh: {
                cn: '刷新',
                en: 'refresh'
            },
            reset: {
                cn: '复原',
                en: 'reset'
            },
            themname: {
                cn: '主题名称',
                en: 'Theme name'
            },
            seriesNum: {
                cn: '系列数量',
                en: 'Series Number'
            }
        }
    },
    basic: {
        cn: '基本配置',
        en: 'BASIC OPTION'
    }
}

export const getTransText = (key: string, language: string): any => {
    //key只能是两级，翻译只体现在一个功能块和功能块下的文案
    if (!language) {
        return null;
    }
    if (/\//g.test(key)) {
        const keys = key.split('/');
        if (!translation[keys[0]]) {
            return null;
        }
        return translation[keys[0]]['sub'][keys[1]][language];
    }
    if (!translation[key]) {
        return null;
    }
    return translation[key][language];
}