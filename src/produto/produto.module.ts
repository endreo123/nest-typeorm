import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoController } from './produto.controller';
import { ProdutoRepository } from './produto.repository';
import { ProdutoEntity } from './produto.entity';
import { ProdutoService } from './produto.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoEntity])],
  controllers: [ProdutoController],
  providers: [ProdutoRepository, ProdutoService],
})
export class ProdutoModule {}
