import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioEntity } from "./usuario.entity";
import { Repository } from "typeorm";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ) {}

    public async lista() {
        const usuariosSalvos = await this.usuarioRepository.find();
        const usuariosLista = usuariosSalvos.map(
            ({id, nome}) => new ListaUsuarioDTO(id, nome)
        )

        return usuariosLista
    }

    public async cria(UsuarioEntity: UsuarioEntity) {
        await this.usuarioRepository.save(UsuarioEntity);
    }

    public async atualiza(id: string, usuarioEntity: AtualizaUsuarioDTO) {
        await this.usuarioRepository.update(id, usuarioEntity)
    }

    public async deleta(id: string) {
        await this.usuarioRepository.delete(id);
    }
}
